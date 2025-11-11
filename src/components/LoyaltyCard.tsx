import { Award, Gift } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface LoyaltyCardProps {
  points: number;
  userName: string;
  detailed?: boolean;
}

export function LoyaltyCard({ points, userName, detailed = false }: LoyaltyCardProps) {
  const pointsToNextReward = 100;
  const progress = (points % pointsToNextReward) / pointsToNextReward * 100;
  const rewardsEarned = Math.floor(points / pointsToNextReward);

  const rewards = [
    { points: 100, reward: 'Free Coffee' },
    { points: 200, reward: 'Free Pastry' },
    { points: 300, reward: 'Free Frappe' },
    { points: 500, reward: 'Free Lunch' },
  ];

  if (!detailed) {
    return (
      <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5" />
          <p className="text-sm">Loyalty Points</p>
        </div>
        <p className="text-2xl mb-1">{points}</p>
        <p className="text-xs opacity-90">
          {pointsToNextReward - (points % pointsToNextReward)} points to next reward
        </p>
        <Progress value={progress} className="mt-2 h-2 bg-white/30" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Points Summary */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-90">Hello, {userName}</p>
            <p className="text-2xl mt-1">{points} Points</p>
          </div>
          <Award className="w-12 h-12 opacity-80" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to next reward</span>
            <span>{points % pointsToNextReward}/{pointsToNextReward}</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/30" />
        </div>
      </div>

      {/* Rewards Earned */}
      {rewardsEarned > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-green-600" />
            <p className="text-green-800">
              You have {rewardsEarned} reward{rewardsEarned > 1 ? 's' : ''} available!
            </p>
          </div>
          <p className="text-sm text-green-700">
            Ask our staff to redeem your rewards
          </p>
        </div>
      )}

      {/* How It Works */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="mb-3">How It Works</h4>
        <p className="text-sm text-gray-700 mb-4">
          Earn 1 point for every C$10 spent. Collect points to unlock rewards!
        </p>
        <div className="space-y-2">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                points >= reward.points
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Award className={`w-4 h-4 ${
                  points >= reward.points ? 'text-green-600' : 'text-gray-400'
                }`} />
                <span className="text-sm">{reward.reward}</span>
              </div>
              {points >= reward.points ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Unlocked
                </Badge>
              ) : (
                <span className="text-xs text-gray-500">{reward.points} pts</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
